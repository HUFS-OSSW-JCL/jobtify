import wanted
import Incruit
import Rallit
import Jumpit
import threading
import requests
import json

Sema = threading.Semaphore(4)

post_url = "http://158.247.238.32:8000/set_jds"
get_url = "http://158.247.238.32:8000/get_crawl_info"

def siteFilter(sitename, keyword, area):

    Sema.acquire()
    if sitename == "incruit":
        result = Incruit.SearchJob(keyword, area)
    elif sitename == "wanted":
        result = wanted.SearchJob(keyword, area)
    elif sitename == "jumpit":
        result = Jumpit.SearchJob(keyword, area)
    elif sitename == "rallit":
        result = Rallit.SearchJob(keyword, area)
    data = result
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(post_url, data=json.dumps(data), headers=headers)
    Sema.release()


if __name__ == "__main__":

    r = requests.post(get_url)
    jsondata = r.json()
    keys = jsondata["keywords"]
    area = jsondata["country"]
    sitelist = jsondata["sites"]

    threads = []

    for site in sitelist:
        for key in keys:
            t = threading.Thread(target = siteFilter, args = (site, key, area))
            t.start()
            threads.append(t)

    for t in threads:
        t.join()
