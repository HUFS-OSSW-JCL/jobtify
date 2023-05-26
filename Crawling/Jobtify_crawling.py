import wanted
import Incruit
import Rallit
import Jumpit
import threading

def siteFilter(sitename, keyword):
    if sitename == "인크루트":
        result = Incruit.SearchJob(keyword)
    elif sitename == "원티드":
        result = wanted.SearchJob(keyword)
    elif sitename == "점핏":
        result = Jumpit.SearchJob(keyword)
    elif sitename == "랠릿":
        result = Rallit.SearchJob(keyword)

if __name__ == "__main__":
    # sitelist = ["인크루트"]
    # keys = list(input().split())
    #
    # threads = []
    # for site in sitelist:
    #     for key in keys:
    #         t = threading.Thread(target = siteFilter, args = (site, key))
    #         t.start()
    #         threads.append(t)
    #
    # for t in threads:
    #     t.join()

    a = wanted.SearchJob("PM")
    print(a)
