require "bundler/setup"
require "google_drive"

filename = ARGV[0]

session = GoogleDrive::Session.from_config("config.json")
session.upload_from_file(filename, File.basename(filename), convert: false)
