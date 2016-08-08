(function() {

    'use strict';

    angular.module('wmsApp')
        .constant('langEN', {
            en: {
                LANGUAGE_LIST: {
                    LANG_SELECTED: 'English (India)',
                    LANG1: 'English (India)',
                    LANG2: 'Arabic (Dubai)',
                    LANG3: 'Malay (Malaysia)',
                    LANG4: 'Tamil (Srilanka)'
                },

                // Page wise lang translate

                LOGIN_PAGE: {
                    PAGE_TITLE: 'Godam | Login',
                    ERR1: 'Invalid user name or password.',
                },
                HOME_PAGE: {
                    PAGE_TITLE: 'Godam | Home',
                    P1: 'If you do not have Delhivery ID,',
                    GOOGLE_AUTH_SUCC_MSG: 'Thank you for registering with Godam.<br/>You can start using the application when',
                    GOOGLE_AUTH_SUCC_MSG1: 'your profile is approved by the administrator.',
                    MAIL_TEXT: 'Please mail to',
                    QUERY_TEXT: 'for any queries.',
                    GOOGLE_AUTH_ERR_MSG: 'Oops! Looks like you did not allow us to check <br>your Google email address and basic profile information',
                    GOOGLE_AUTH_ERR_MSG1: 'Please try again.',
                    CLICK_LOGIN_TEXT: 'Click here to login'
                },
                FORGOT_PASSWORD_PAGE: {
                    PAGE_TITLE: 'Godam | Forgot Password',
                    H1: 'Please enter your Email address <br/> A link to reset your password will be sent to this address.',
                    P1: 'A link to reset your password has<br/>  been sent to your mail.',
                    CLICK_LOGIN_TEXT: 'Click here to Login',
                    PLACEHOLDER_TEXT: 'Enter email',
                    ERR2: 'Email address too long.',
                    ERR3: 'Enter a valid email. For example, xyz@xyz.com',
                    ERR4: 'Error occurred, please contact admin'
                },
                RESET_PASSWORD_PAGE: {
                    PAGE_TITLE: 'Godam | Reset Password',
                    CONFIRM_PASSWORD_TEXT: 'Confirm new Password',
                    NEW_PASSWORD_TEXT: 'Enter new Password'
                },
                CHANGE_PASSWORD_PAGE: {
                    PAGE_TITLE: 'Godam | Change Password',
                    CHANGE_PASSWORD_TEXT: 'Change Password',
                    CURRENT_PASSWORD_TEXT: 'Enter current Password',
                    CHANGE_PASS: 'Change',
                    P1: 'Password changed successfully',
                    P2: 'Taking you to the login page <br> in 5 seconds',
                    ERR1: 'New password and confirm password do not match.'
                },
                FC_PAGE: {
                    H1: 'Hello',
                    H2: 'Which Fulfilment Centre are you working in?',
                    SELECT_FC_TEXT: 'Enter Fulfilment Centre'
                },

                // Nav menu lang translate

                LEFT_MENU: {
                    NAV1: {
                        PARRENT_MENU: 'Channel',
                    },
                    NAV2: {
                        PARRENT_MENU: 'Courier'
                    },
                    NAV3: {
                        PARENT_MENU: 'Products',
                        SUB_MENU: {
                            MANAGE_PRODS: 'Manage products',
                            MANAGE_ITEM: 'Manage items',
                            CHANNEL_MAP: 'Product-Channel mapping',
                            ADD_PROD: 'Add new products'
                        }
                    }
                },

                // Page Title
                PAGE_TITLE: {
                    TITLE4: 'Godam | Products',
                    TITLE5: 'Godam | Cient | Select',
                    TITLE6: 'Godam | Channel',
                    TITLE10: 'Godam | Courier',
                    TITLE7: 'Godam | Product Management'
                },

                // Page Breadcum
                BRD_CM: {
                    PAGE_ONE: {
                        BRD1: 'Channels',
                        BRD2: 'Modify channel',
                        BRD3 : 'Add channel',
                        BRD4: 'Manage products',
                        BRD5: 'Manage items',
                        BRD6: 'Item details'
                    },
                    PAGE_TWO: {
                        BRD1: 'Couriers',
                        BRD2: 'Modify courier',
                        BRD3: 'Add courier',
                        BRD4: 'Upload/Download serviceability & Waybills',
                        BRD5: 'Product details'
                    },
                },

                // Alert message prefix text

                ALERT_MSG: {
                    SUCC_HEAD: 'Success!',
                    INFO_HEAD: 'Info!',
                    WARNING_HEAD: 'Warning!',
                    ERROR_HEAD: 'Error!'
                },

                // Success message text

                SUCC_MSG: {
                    MSG5 : 'The channel has been successfully modified.',
                    MSG6 : 'The new channel has been successfully added.',
                    MSG7: 'Password has been reset successfully. <br/>Login with your new password.',
                    MSG8: 'Batch has been marked as received successfully.',
                    MSG10: 'Attribute values changed successfully!',
                    MSG11: 'The new courier has been successfully added!',
                    MSG12 : 'The courier has been successfully modified.',
                },

                //Error message text

                ERR_MSG: {
                    MSG1: 'Must contain one lower &amp; uppercase letter, and one non-alpha character (a number or a symbol.)',
                    MSG2: 'Password must be between 8 and 20 characters.',
                    MSG3: 'Some error occurred. Please try again later',
                    MSG4: 'Page not found.',
                    MSG9: 'Reset password link is not valid.',
                    MSG10: 'to reset your password again.',
                    MSG11: 'Product quantity should be greater than zero for product name ',
                    MSG12: 'Please enter location',
                    MSG13: 'Should be 14 - 15 digits',
                    MSG14 : 'Master channel not found!',
                    MSG15: 'Invalid File Size. Please upload file less than 2 MB.',
                    MSG16: 'Invalid File Type. Please Upload only CSV file Format',
                    MSG17: 'Browser does not support file system.',
                    MSG18: 'Please select a file'
                },

                // Warning message text

                WARN_MSG: {
                    MSG1: 'This item belongs to ',
                    MSG2: ' You will be told to check other items belonging to the same order after having marked this item.',
                    MSG3: ' You can scan any of the other items in the order:',
                    MSG4: 'You cannot scan any other item for now.',
                    MSG5: 'This Serial number allready Put Away on this Loaction'
                },

                // Page information message

                INFO_MSG: {
                    IMSG1: 'Review the products you have added here. ASN will be created in the next step. Go back to make any changes.',
                    IMSG2: 'Review the products you have added here. The unexpected batch will be created in the next step. Go back to make any changes.'
                },

                // Page content

                PAGE_CONTENT: {
                    GENERIC: {
                        HEADING: 'Godam Client',
                    },
                    PAGE_ONE: {
                        PLZ_TEXT: 'please'

                    },
                    PAGE_TWO: {
                        HEAD1: 'Hello',
                        HEAD2: 'Which Client Party are you working in?',
                    }
                },

                // Table heading and label content

                LABEL_TEXT: {
                    // Label Text/ Title text
                    LABEL1: 'Channel',
                    LABEL2: 'Status',
                    LABEL3: 'Actions',
                    LABEL4: 'Courier',
                    LABEL5: 'Priority',
                    LABEL6: 'MRP cutoff(INR)',
                    LABEL7: 'Weight cutoff(kg)',
                    LABEL8: 'Serviceability/Waybills',
                    LABEL9: 'Filters',
                    LABEL10: 'Product number',
                    LABEL11: 'Fulfillment center',
                    LABEL12: 'Select state',
                    LABEL13: 'Any',
                    LABEL14: 'Product name',
                    LABEL15: 'Qty available',
                    LABEL16: 'Qty in hand',
                    LABEL17: 'Qty hold',
                    LABEL18: 'Products',
                    LABEL19: 'results',
                    LABEL20: 'Serial',
                    LABEL21: 'Date range',
                    LABEL22: 'Product Information',
                    LABEL23: 'Product SKU',
                    LABEL24: 'Category',
                    LABEL25: 'Description',
                    LABEL26: 'URL',
                    LABEL27: 'Product Attributes',
                    LABEL28: 'Weight (gm)',
                    LABEL29: 'Length (in cm)',
                    LABEL30: 'Width (in cm)',
                    LABEL31: 'Height (in cm)',
                    LABEL32: 'Expiry date',
                    LABEL33: 'MRP (in INR)',
                    LABEL34: 'IMEI',
                    LABEL35: 'View status history',
                    LABEL36: 'Default',
                    LABEL1020: 'Product-Channel mapping',
                    LABEL1021: 'Date range',
                    LABEL1022: 'Mapping',
                    LABEL1023: 'Seller SKU on channel',
                    LABEL1024: 'Allocation',
                    LABEL1025: 'Edit Allocation',
                    LABEL1026: 'Product channel URL',
                    LABEL1027: 'of',
                    LABEL1028: '%',
                    LABEL1029: 'pcs',
                    LABEL1030: 'Edit product allocation on a channel',
                    LABEL1031: 'Product',
                    LABEL1032: 'Choose unit',
                    LABEL1033: 'Percentage (%)',
                    LABEL1034: 'Quantity (pcs)',
                    LABEL1035: 'Set value',
                    LABEL1036: 'Enter number',
                    LABEL1037: 'Edit product state on a channel',
                    LABEL1038: 'Product state',
                    LABEL1039: 'Edit product state',

                    SELECT_PMC: 'Select Master Courier',
                    SELECT_PRIORITY: 'select priority',
                    PMC: 'Master courier',
                    NAME: 'Name',
                    PRIORITY: 'Priority',
                    MRP: 'MRP Cutoff(INR)',
                    WEIGHT: 'Weight Cutoff(kg)',
                    STATUS: 'Status',
                    ACTIVE: 'Active',
                    INACTIVE: 'Inactive',
                    ADDITIONAL: 'Additional fields',
                    DOWNLOAD_SAMPLE: 'Download Sample',
                    SERVICEABILITY: 'Serviceability',
                    WAYBILL: 'Waybill',
                    DOWNLOAD_WAYBILL: 'Download existing waybill',
                    DOWNLOAD_SERVICEABILITY: 'Download existing serviceability',
                    CHOOSE_FILE : 'Click to choose a file',
                    TRUE: 'true',
                    FALSE: 'false',
                    BOTH: 'both',
                    PROD_CATALOG: 'Product catalog',
                    URL: 'URL',
                    PROD_DESC: 'Product description',
                    SKU: 'SKU',
                    MRK_UNAVAIL_RANGE: 'Mark unavailable range',
                    TAG_CAT_SUB_CAT: 'TAGGED CATEGORIES & SUB-CATEGORIES',
                    ATTRIBUTES: 'ATTRIBUTES',
                    DIMENSION_UNIT: 'Dimension unit',
                    CURRENCY: 'Currency',
                    MMRP: 'MRP',
                    EXP_DATE: 'Expiry date',
                    LNGTH: 'Length',
                    WDTH:  'Width',
                    HGHT: 'Height',
                    WT: 'Weight',
                    BACK: 'Back',

                    // List Value
                    VAL1: 'Active',
                    VAL2: 'Inactive'
                },

                // Placeholder and Button content

                INPUT_TEXT: {

                    //Placeholder
                    USER_NAME: 'Username',
                    PASSWORD: 'Password',
                    PH1: 'Enter client',
                    PH2: 'Enter product number',
                    PH3: 'Enter number separated by comma/space',
                    PH4: 'Enter fulfillment center',
                    PH5: 'YYYY-MM-DD - YYYY-MM-DD',
                    SELECT_MC : 'Select master channel',
                    ENTER_NAME : 'Enter name',
                    ENTER_VALUE : 'Enter value',
                    ENTER_PASSWORD : 'Enter password',
                    ENTER_DATE : 'Enter date',
                    TOKEN_EXP_DATE : 'Token expiry date',
                    // Anchor Link Button
                    LINK_BTN1: 'Click Here',
                    LINK_BTN2: 'Forgot Password',
                    LINK_BTN3: 'Modify',
                    LINK_BTN6: 'Upload/Download',
                    // Button 
                    BTN1: 'Login with Delhivery ID',
                    BTN2: 'Login',
                    BTN3: 'Reset Password',
                    BTN4: 'Submit',
                    BTN5: 'Launch Application',
                    BTN6: 'Add new channel',
                    BTN7: 'Add new courier',
                    BTN8: 'Cancel',
                    BTN9: 'Save',
                    BTN10: 'Add Product',
                    BTN11: 'Download report',
                    BTN12: 'Upload bulk',
                    BTN13: 'Edit state',
                    BACK: 'Back',
                    BTN14: 'Add',
                    BTN1015: 'Save changes',
                    BTN_UPLOAD: 'Upload',
                    BTN_DOWNLOAD: 'Download'
                },

                // Item Status Options

                ITEM_STATUS: {
                    RCV: 'Received',
                    ACC: 'Accepted',
                    REJ: 'Rejected',
                    TBQ: 'To Be Quarantined',
                    STK: 'Stocked',
                    TBP: 'To Be Picked',
                    PIK: 'Picked',
                    PAK: 'Packed',
                    RTS: 'Ready to Ship',
                    SHP: 'Shipped',
                    OUT: 'Item Returned',
                    RTV: 'RTV',
                    RTO: 'RTO',
                    HLD: 'Hold',
                    DIS: 'Disposed',
                    LST: 'Lost',
                    JNK: 'Junk',
                    EXP: 'Expired',
                    PFP: 'Picked For Packing',
                    RWR: 'Return Waybill Recieved',
                    RPO: 'Return PO Created',
                    CD: 'Cross Dock'
                },

                // Date Type

                DATE_TYPE: {
                    DATE1: 'Shipped on',
                    DATE2: 'Packed on',
                    DATE3: 'Picked on',
                    DATE4: 'Stocked on',
                    DATE5: 'Accepted on',
                    DATE6: 'Received on'
                },

                // Genric content
                COMPANY_NAME: 'SSN Logistics Pvt Ltd, 2014',
                NO_RECORD: 'No record found'
            }
        });
})();