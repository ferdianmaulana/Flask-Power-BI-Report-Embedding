# Copyright (c) Microsoft Corporation.
# Licensed under the MIT license.

class BaseConfig(object):

    # Can be set to 'MasterUser' or 'ServicePrincipal'
    AUTHENTICATION_MODE = 'ServicePrincipal'

    # Workspace Id in which the report is present
    WORKSPACE_ID = 'WORKSPACE ID'
    
    # Report Id for which Embed token needs to be generated
    # REPORT_ID = '3ff4e158-3478-4e96-a533-90884b4431cd'
    REPORT_ID = 'REPORT ID'
    
    # Id of the Azure tenant in which AAD app and Power BI report is hosted. Required only for ServicePrincipal authentication mode.
    TENANT_ID = 'TENANT ID'
    
    # Client Id (Application Id) of the AAD app
    CLIENT_ID = 'CLIENT ID'
    
    # Client Secret (App Secret) of the AAD app. Required only for ServicePrincipal authentication mode.
    CLIENT_SECRET = 'CLIENT SECRET'
    
    # Scope Base of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
    SCOPE_BASE = ['https://analysis.windows.net/powerbi/api/.default']
    
    # URL used for initiating authorization request
    AUTHORITY_URL = 'https://login.microsoftonline.com/organizations'
    
    # Master user email address. Required only for MasterUser authentication mode.
    POWER_BI_USER = ''
    
    # Master user email password. Required only for MasterUser authentication mode.
    POWER_BI_PASS = ''