(function() {
    'use strict';

    angular.module('wmsApp')
        .service('genericService', GenericService);

    GenericService.$inject = ['$http', 'settings'];

    function GenericService($http, settings) {
        this.getAutoCompleteData = getAutoCompleteData;
        this.tagInputData = tagInputData;
        this.getManageLookup = getManageLookup;
        this.cleanNullKey = cleanNullKey;
        this.csvToJson = csvToJson;

        ///////////////////////////////////////

        function getAutoCompleteData(params) {
            // return http promise object attempting get Autocomplete data
            return $http({
                'url': settings.API_URI.GET_AUTOCOMPLETE_DATA,
                'method': 'GET',
                'params': params,
                'ignoreLoadingBar': true
            });
        }

        function tagInputData(data) {
            var tagsData = [];
            _.each(data, function(name) {
                name = name.fields;
                var keys = Object.keys(name);
                var fields = {};
                _.each(keys, function(key) {
                    fields[key] = name[key] ? name[key][0] : null;
                });
                tagsData.push(fields);
            });
            return tagsData;
        }

        function getManageLookup(data) {
            return $http({
                'url': settings.API_URI.GET_MANAGEMENT_LOOKUP,
                'method': 'GET',
                'params': data,
            });
        }

        function cleanNullKey(data) {
            _.each(data, function(item, key) {
                if (!data[key]) {
                    delete data[key];
                }
            });
            return data;
        }


        function csvToJson(csv, key_map) {

            var allTextLines = csv.split(/\r\n|\n/);
            var result = [];
            // var row = [];

            var DataHeader = allTextLines.shift().split(','); /* for headline row */
            while (allTextLines.length)
            {
                var obj = {};
                var row = allTextLines.shift().split(',');
                var isValid = false;

                for (var i = 0; i < DataHeader.length; i++)
                {
                    // To Rename Key in Snake Case
                    var header_key = DataHeader[i].trim().replace(/ /g, '_').toLowerCase();

                    if (typeof (row[i]) !== 'undefined' && row[i] !== '')
                    {
                        // To Rename Key According to API Format
                        if (_.has(key_map, header_key))
                        {
                            obj[key_map[header_key][0]] = key_map[header_key][1](row[i]);

                            // to copy same value into different key
                            if (key_map[header_key].length > 2)
                            {
                                if (typeof (key_map[header_key][3]) === 'undefined') {
                                    obj[key_map[header_key][2]] = key_map[header_key][1](row[i]);
                                } else {
                                    obj[key_map[header_key][2]] = key_map[header_key][3];
                                }
                                isValid = true;
                            }
                        } else {
                            isValid = true;
                            obj[header_key] = row[i];
                        }
                    } else {
                        obj[header_key] = null;
                        isValid = isValid || false;
                    }

                }

                // check if complete row is empty then not push to list
                if (!_.isEmpty(obj) && isValid ) {
                    result.push(obj);
                }

            }
            return result;
            //return JSON.stringify(result);
        }
    }
})();
