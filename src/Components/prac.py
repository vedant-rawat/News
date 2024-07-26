import phonenumbers
from phonenumbers import geocoder
import folium

key = "d6d0a44c708143ccbc1ebbbcf2938c29"

number = "+917028241878"

checknum = phonenumbers.parse(number)
num_loc = geocoder.description_for_number(checknum, "en")
print(num_loc)

from phonenumbers import carrier
service_provider = phonenumbers.parse(number)
print(carrier.name_for_number(service_provider, "en"))

from opencage.geocoder import OpenCageGeocode
geocoder = OpenCageGeocode(key)

query = str(num_loc)
results = geocoder.geocode(query)
lat = results[0]['geometry']['lat']
lng = results[1]['geometry']['lng']
print(lat, lng)

map_loc = folium.Map(location=[lat, lng], zoom_start=9)
folium.Marker([lat, lng], popup=num_loc).add_to(map_loc)
map_loc.save("myloc.html")