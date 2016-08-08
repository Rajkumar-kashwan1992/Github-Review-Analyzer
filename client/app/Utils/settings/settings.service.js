(function(){
  'use strict';

  angular.module('wmsApp')
      .constant('settings', {
          /*Language Dropdown Settings*/
          DEFAULT_LANGUAGE: {
              'name': 'English (India)',
              'locale': 'en',
              'flagURL': 'assets/images/india.png'
          },
          LANGUAGES: [{
              'name': 'English (India)',
              'locale': 'en',
              'flagURL': ''
          }],
          // LANGUAGES: [{
          //     'name': 'Arabic (Dubai)',
          //     'locale': 'ar',
          //     'flagURL': ''
          // }, {
          //     'name': 'English (India)',
          //     'locale': 'en',
          //     'flagURL': ''
          // }, {
          //     'name': 'Malay (Malaysia)',
          //     'locale': 'ml',
          //     'flagURL': ''
          // }, {
          //     'name': 'Tamil (Srilanka)',
          //     'locale': 'tm',
          //     'flagURL': 'assets/images/india.png'
          // }],
          ITEM_CSV_FILE_NAME: 'Item',

          /*API's setting to get data for different Pages*/
          API_URI: {
              LOGIN: '/api/login',
              LOGIN_GID: '/api/login-gid',
              FORGOT_PASSWORD: '/api/forgotpassword',
              RESET_PASSWORD: '/api/resetpassword',
              CHANGE_PASSWORD: '/api/changePassword',
              VALIDATE_TOKEN: '/api/resetpassword/validateToken',
              VERIFY_SESSION: '/api/verifySession',
              GET_AUTOCOMPLETE_DATA: '/api/getAutoCompleteData',
              LOGOUT: '/api/logout',
              USER_PROFILE: '/api/user-profile',
              GET_USER_PERMISSION: '/api/user-profile/getUserpermission',
              CHANNEL_LIST: '/api/channelList',
              CHANNEL_DETAIL : '/api/channelDetail',
              MODIFY_CHANNEL : '/api/channelModify',
              ADD_CHANNEL : '/api/addChannel',
              MASTER_CHANNEL_LIST : '/api/masterChannelList',
              MASTER_CHANNEL_DETAIL : '/api/masterChannelDetail',
              COURIER_LIST: 'api/courierList',
              COURIER_DETAILS: 'api/courierModify',
              MODIFY_COURIER: 'api/courierModify/modify',
              COURIER_ADD: 'api/courierAdd',
              PMC_LIST: 'api/pmcList',
              UPLOAD_WAYBILL: '/api/upload/waybill/',
              UPLOAD_SERVICEABILITY: '/api/upload/serviceability/',
              DOWNLOAD_WAYBILL: '/api/download/waybill',
              DOWNLOAD_SERVICEABILITY: '/api/download/serviceability',
              MANAGE_PRODUCT_LIST: '/api/product/manageProduct/list',
              GET_PROD_INV_LIST: '/api/product/manageProduct/list/getProductInvList',
              MANAGE_ITEM_LIST: '/api/product/manageItem/list',
              ITEM_DETAIL: '/api/itemDetail',
              PRODUCT_DETAIL: '/api/itemDetail/productDetail',
              EDIT_PROD_DETAIL: '/api/product/manageProduct/list/editProduct',
              PROD_CHANNEL_MAPPING_LIST: '/api/product/channelMapping/list',
              UPDATE_PROD_CHANNEL_MAPPING: '/api/product/channelMapping/update',
              MANAGE_ITEM_CSV_DOWNLOAD: 'api/product/manageItem/list/csvDownload',
              GET_QC_PCMS_DETAIL: '/api/product/manageProduct/detail/pcmsDetail'
          },
          /*Url to define some conditions in navbar*/
          ROUTES: {
              CHANGE_PASSWORD_URL: '/password/change',
              SELECT_CLIENT_URL: '/select/client',
              GOOGLE_OAUTH_URL: '/account/google-oauth2'
          },
          /*Pagination default Settings*/
          PAGINATION: {
              resultPerPage: 10,
              startCount: 0,
              pageNo: 1,
              lastCount: 10,
              totalCount: 0
          },
          ITEM_STATUS: ['RCV', 'ACC', 'REJ', 'TBQ', 'STK', 'TBP', 'PAK', 'RTS', 'SHP', 'OUT', 'RTV', 'RTO', 'HLD', 'DIS', 'LST', 'JNK', 'EXP', 'PFP', 'RWR', 'RPO'],
          MODAL_ROUTE: {
            CHAN_MAP_PRODUCT: {
              STATE_MODAL: 'app/product/channelMapping/list/productState.modal.template.html',
              ALLOC_MODAL: 'app/product/channelMapping/list/productAllocation.modal.template.html'
            },
            MANAGE_PROD: {
              STATE_MODAL: 'app/product/manageProduct/list/productState.modal.template.html'
            }
          },
          /*permissions map settings and user role mapping to decide navbar*/
          LEFT_MENU: [{
              title: 'LEFT_MENU.NAV1.PARRENT_MENU',
              iconClass: 'icon-channels',
              link: '/channels',
              submenu: [],
              permissions: ['po.can_list_agn'],
              module: 'CHANNEL',
              id: 0
          },
          {
              title: 'LEFT_MENU.NAV2.PARRENT_MENU',
              iconClass: 'icon-courier',
              link: '/couriers',
              submenu: [],
              permissions: ['po.can_list_agn'],
              module: 'COURIER',
              id: 1
          },
          {
            title: 'LEFT_MENU.NAV3.PARENT_MENU',
            iconClass: 'icon-product',
            submenu: [
            {
                  title: 'LEFT_MENU.NAV3.SUB_MENU.ADD_PROD',
                  link: '/products/add/',
                  permission: ['po.can_list_agn'],
                  submodule: 'ADD-PROD'
            },
            {
                title: 'LEFT_MENU.NAV3.SUB_MENU.MANAGE_PRODS',
                link: '/products',
                permission: ['po.can_list_agn'],
                submodule: 'MANAGE-PRODUCT'
            },
            {
                title: 'LEFT_MENU.NAV3.SUB_MENU.MANAGE_ITEM',
                link: '/product/items',
                permission: ['po.can_list_agn'],
                submodule: 'MANAGE-ITEM'
            },
            {
                  title: 'LEFT_MENU.NAV3.SUB_MENU.CHANNEL_MAP',
                  link: '/product-channel-mapping',
                  permission: ['po.can_list_agn'],
                  submodule: 'PROD-CHNL-MAPPING'
            }],
            permissions: ['po.can_list_agn'],
            module: 'PRODUCT',
            id: 2
          }],

          FILE_NAME : {
              WAYBILL: 'Waybill',
              SERVICEABILITY: 'Serviceability'
          },

          /*To check whether station is required for default landing url or not*/
          // DEFAULT_LANDING_URL_MAP: {
          //     '/channel': false,
          // },

          POST_LOGOUT_LOCATION: '/',
          // Session key name to fetch from browser cookie/session
          SESSION_KEY_NAME: 'sessionkey',
          CP_NAME: 'client_name',
          CP_ID : 'client_id',
          CP_SLUG : 'client_slug',
          ACCESS_KEY : 'access_key',
          // Prefix for session values
          SESSION_VALUE_PREFIX: 'WMS',
          NON_RESTRICTED_URLS: [
              '/login',
              '/account/google-oauth2',
              '/home',
              '/password/recovery',
              '/password/reset'
          ]
      });
})();
