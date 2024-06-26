{
    'name': 'Property Management System',
    'version': '1.0',
    'summary': 'Managing the Property Operations',
    'author': 'Anish Chaudhari',
    'sequence': -10,

    'depends': ['base', 'mail', 'web'],
    'data': ['security/ir.model.access.csv',
             'security/security_acess_groups.xml',
             'data/sequence_view.xml',
             # 'data/property_quotation_email_templates.xml',
             'wizard/update_price_view.xml',
             'views/buy_views.xml',
             'views/sql_query.xml',
             'views/propertylist_views.xml',
             'views/inquiry_views.xml',
             'views/cancel_inquiry_views.xml',
             'views/customer_progress_views.xml',
             'views/menu_views.xml',
             'views/property_listing_progress_views.xml',

             'reports/buyer_report_views.xml',
             'reports/property_list_report_views.xml'],

    'installable': True,
    'application': True,
    'license': 'LGPL-3',
}
