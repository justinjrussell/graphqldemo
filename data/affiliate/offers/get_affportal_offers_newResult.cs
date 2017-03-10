using System;
using System.Data.Linq.Mapping;

namespace DataLibrary2
{
	public class get_affportal_offers_newResult
	{
		public get_affportal_offers_newResult();

		[Column(Storage = "_advertiser_terms", DbType = "nvarchar")]
		public string advertiser_terms { get; set; }
		[Column(Storage = "_campaign_contract_date_added", DbType = "datetime NOT NULL")]
		public DateTime campaign_contract_date_added { get; set; }
		[Column(Storage = "_campaign_contract_id", DbType = "int NOT NULL")]
		public int campaign_contract_id { get; set; }
		[Column(Storage = "_campaign_contract_name", DbType = "nvarchar(50)")]
		public string campaign_contract_name { get; set; }
		[Column(Storage = "_campaign_id", DbType = "int")]
		public int? campaign_id { get; set; }
		[Column(Storage = "_campaign_image_link", DbType = "varchar(255)")]
		public string campaign_image_link { get; set; }
		[Column(Storage = "_campaign_name", DbType = "nvarchar(200)")]
		public string campaign_name { get; set; }
		[Column(Storage = "_contract_id", DbType = "int")]
		public int? contract_id { get; set; }
		[Column(Storage = "_contract_type_id", DbType = "int")]
		public int? contract_type_id { get; set; }
		[Column(Storage = "_countries", DbType = "varchar(1000)")]
		public string countries { get; set; }
		[Column(Storage = "_currency_id", DbType = "tinyint")]
		public byte? currency_id { get; set; }
		[Column(Storage = "_description", DbType = "nvarchar")]
		public string description { get; set; }
		[Column(Storage = "_ecommerce_storefront_id", DbType = "int")]
		public int? ecommerce_storefront_id { get; set; }
		[Column(Storage = "_expiration_date", DbType = "smalldatetime")]
		public DateTime? expiration_date { get; set; }
		[Column(Storage = "_hidden", DbType = "bit")]
		public bool? hidden { get; set; }
		[Column(Storage = "_media_type", DbType = "nvarchar(25)")]
		public string media_type { get; set; }
		[Column(Storage = "_media_types", DbType = "nvarchar")]
		public string media_types { get; set; }
		[Column(Storage = "_preview_link", DbType = "varchar(750)")]
		public string preview_link { get; set; }
		[Column(Storage = "_price_format", DbType = "varchar(8)")]
		public string price_format { get; set; }
		[Column(Storage = "_price_format_id", DbType = "tinyint")]
		public byte? price_format_id { get; set; }
		[Column(Storage = "_price_paid", DbType = "smallmoney")]
		public decimal? price_paid { get; set; }
		[Column(Storage = "_price_paid_converted", DbType = "decimal(29,14)")]
		public decimal? price_paid_converted { get; set; }
		[Column(Storage = "_price_paid_max", DbType = "smallmoney")]
		public decimal? price_paid_max { get; set; }
		[Column(Storage = "_price_paid_max_converted", DbType = "smallmoney")]
		public decimal? price_paid_max_converted { get; set; }
		[Column(Storage = "_price_paid_min", DbType = "smallmoney")]
		public decimal? price_paid_min { get; set; }
		[Column(Storage = "_price_paid_min_converted", DbType = "smallmoney")]
		public decimal? price_paid_min_converted { get; set; }
		[Column(Storage = "_restrictions", DbType = "nvarchar")]
		public string restrictions { get; set; }
		[Column(Storage = "_rules_targeting_enabled", DbType = "bit")]
		public bool? rules_targeting_enabled { get; set; }
		[Column(Storage = "_status_id", DbType = "int")]
		public int? status_id { get; set; }
		[Column(Storage = "_status_name", DbType = "varchar(25)")]
		public string status_name { get; set; }
		[Column(Storage = "_storefront_name", DbType = "nvarchar(75)")]
		public string storefront_name { get; set; }
		[Column(Storage = "_third_party_id", DbType = "nvarchar(50)")]
		public string third_party_id { get; set; }
		[Column(Storage = "_vertical_id", DbType = "smallint")]
		public short? vertical_id { get; set; }
		[Column(Storage = "_vertical_name", DbType = "nvarchar(50)")]
		public string vertical_name { get; set; }
	}
}

int? publisher_id, 
string campaign_name, 
byte? media_type_category_id, 
byte? media_type_id, 
byte? vertical_category_id, 
short? vertical_id, 
byte? price_format_id, 
byte? status_id, 
byte? language_id, 
short? tag_id, 
int? ecommerce_storefront_id, 
int? ecommerce_master_category_id, 
string country_code, 
int? price_paid_min, 
int? price_paid_max,
DateTime? server_date