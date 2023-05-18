import Saramin
import JobKorea
import wanted
import Incruit
import ray
import threading

def siteFilter(sitename, keyword):
    if sitename == "인크루트":
        result = Incruit.SearchJob(keyword)
    elif sitename == "잡코리아":
        result = JobKorea.SearchJob(keyword)
    elif sitename == "사람인":
        result = Saramin.JobKorea.SearchJob(keyword)
    elif sitename == "원티드":
        result = wanted.SearchJob(keyword)
    print(result)

if __name__ == "__main__":
    sitelist = ["잡코리아", "인크루트"]
    keys = list(input().split())

    threads = []
    for site in sitelist:
        for key in keys:
            t = threading.Thread(target = siteFilter, args = (site, key))
            t.start()
            threads.append(t)

    for t in threads:
        t.join()