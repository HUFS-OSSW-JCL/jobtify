import wanted
import Incruit
import Rallit
import Jumpit
import threading

def siteFilter(sitename, keyword, area):
    if sitename == "인크루트":
        result = Incruit.SearchJob(keyword, area)
    elif sitename == "원티드":
        result = wanted.SearchJob(keyword, area)
    elif sitename == "점핏":
        result = Jumpit.SearchJob(keyword, area)
    elif sitename == "랠릿":
        result = Rallit.SearchJob(keyword, area)
    #return result
    print(result)

if __name__ == "__main__":
    sitelist = ["인크루트"]
    #keys = list(input().split())
    keys = ["서버"]
    area = ["서울"]

    threads = []

    for site in sitelist:
        for key in keys:
            t = threading.Thread(target = siteFilter, args = (site, key, area))
            t.start()
            threads.append(t)

    for t in threads:
        t.join()
