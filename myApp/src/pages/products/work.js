CREATE TABLE IF NOT EXISTS financial_corportaion (id integer primary key,role_id integer,status_id integer,Activation_code real, first_name text,last_name text,points text,lastconnection_date text,gender_id integer,score integer,defaultlanguage_id integer,password varchar,user_id integer,login_type text,profile_image text,email varchar,date_of_birth text)

CREATE TABLE IF NOT EXISTS banner (id integer primary key, name text,location text, from text, to text,postion text)

CREATE TABLE IF NOT EXISTS color (id integer primary key, name text,RGB text,Hue text,saturation text)

CREATE TABLE IF NOT EXISTS corporation (id integer primary key, name text,finanicalcatagory_id integer)

CREATE TABLE IF NOT EXISTS Currency (id integer primary key, name text,numaric_code real,alphabatic_code varchar,entity text,minor_unit integer,nativecountry_id integer)

CREATE TABLE IF NOT EXISTS Customer (id integer primary key,current_flag integer, first_name text,last_name text,gender_id integer,cellphone_number real,created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text )

CREATE TABLE IF NOT EXISTS Expenses (id integer primary key, current_flag integer, financialentity_id integer,transcation_id integer,movementtype_id integer, category_id integer,refernce text, ammount real, expense_date text,description text)
 

CREATE TABLE IF NOT EXISTS family (id integer primary key, gender text, relation text, name text, users_id integer, created_date text, update_date text, deleted_by text profile_pic text relative_id integer)

CREATE TABLE IF NOT EXISTS financial_category (id integer primary key, financialtype_id string enablelrepo_code integer)

CREATE TABLE IF NOT EXISTS financial_corportaion (id integer primary key, name text)

CREATE TABLE IF NOT EXISTS Financial_Types (id integer primary key, name text ,description text)

CREATE TABLE IF NOT EXISTS FinancialCategory_Translations (id integer primary key, text text ,language_id integer)

CREATE TABLE IF NOT EXISTS FinancialEntities (id integer primary key, type_id string ,last_name text, status_id integer ,corperation_id integer,defaultcurrency_id integer
	,logo text, location text,country_id integer,created_by integer, updated_by integer,deleted_by integer,productcatalog_id integer, deleted_date text
	,updated_date text,sale_repo text,phone_1  integer,phone_2 integer,email text,catagory text, corporation)

CREATE TABLE IF NOT EXISTS FinancialEntitieslinks (id integer primary key, users_id integer,userprofile_id integer,relatedness_id integer,created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text,
 FinancialEntity_ID integer,business_id integer,workmember_id integer)

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS FinancialEntity_Status (id integer primary key, name text, description text) 

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS gender (id integer primary key, name text) 

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS Incomes (id integer primary key, financialentity_id integer,movementtype_id integer,transaction_id integer,category_id integer,amount real, reference text,
	customer_id integer,product_id integer, expense_date text,color_code text, size integer,description text,created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text) 
																		
CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS lanuguage (id integer primary key, name text)	

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS productcatagories (id integer primary key, name text,productcatalog_id integer,created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text)																	
																								
CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS productcatalog (id integer primary key, iscorprate_catalog text, Corporation_ID integer,FinancialEntity_ID integer,ProductCatalog_ID integer,created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text)	
    

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS products (id integer primary key, current_flag boolean, productcatalog_id integer,productcatagory_id integer,sale_price real, code text,picture text,barcode integer, isdifferent_colors array, isdifferent_sizes array, name text, description text, quantity integer,
created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text)

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS productStock (id integer primary key, current_flag integer, financialEntity_id integer, product_id integer, currentStock integer, created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text)

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS shoppingcartitem (id integer primary key, shoppingcart_id integer,product_id integer,color_code integer,size integer,quantity integer,unitprize integer,subtotal integer,product_name text,created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text)

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS size (id integer primary key, name text, value integer)

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS transaction (id integer primary key, financialentity_id integer, direction text,amount real,transactiontype_id  integer,paymentmethod_id text,party_id integer,created_by integer,updated_by integer,deleted_by  integer,created_date text,updated_date text,deleted_date text)

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS user_role (id integer primary key, name text, description text)

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS userprofile (id integer primary key, name text, transaction text,member_id text,created_By integer,business_id integer,access_controls text)
 