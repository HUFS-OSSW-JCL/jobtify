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

def siteFilter(sitename, keyword, area, uid):

    Sema.acquire()
    if sitename == "incruit":
        result = Incruit.SearchJob(keyword, area, uid)
        print(result)
    elif sitename == "wanted":
        result = wanted.SearchJob(keyword, area, uid)
        print(result)
    elif sitename == "jumpit":
        result = Jumpit.SearchJob(keyword, area, uid)
        print(result)
    elif sitename == "rallit":
        result = Rallit.SearchJob(keyword, area, uid)
        print(result)
    data = result
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(post_url, data=json.dumps(data), headers=headers)
    Sema.release()


if __name__ == "__main__":

    r = requests.get(get_url)
    json_data = json.loads(r.content)

    # keys = json_data["keywords"]
    # area = json_data["country"]
    # site_list = json_data["sites"]

    #print(json_data)
    for d in json_data:
        keys = d["keywords"]
        area = d["country"]
        site_list = d["sites"]
        uid = d["uid"]



        threads = []

        for site in site_list:
            for key in keys:
                t = threading.Thread(target = siteFilter, args = (site, key, area, uid))
                t.start()
                threads.append(t)

        for t in threads:
            t.join()
