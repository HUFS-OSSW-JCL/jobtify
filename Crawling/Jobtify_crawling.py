import wanted
import Incruit
<<<<<<< HEAD
import Rallit
import Jumpit
=======
>>>>>>> 5a0a6a6121d71cfdb7e33647efed6b11c9272df9
import threading

# 특정 사이트에서 크롤링을 하기 위해 만든 필터
def siteFilter(sitename, keyword):
    if sitename == "인크루트":
        result = Incruit.SearchJob(keyword)
<<<<<<< HEAD
=======
    elif sitename == "잡코리아":
        result = JobKorea.SearchJob(keyword)
    elif sitename == "사람인":
        result = Saramin.SearchJob(keyword)
>>>>>>> 5a0a6a6121d71cfdb7e33647efed6b11c9272df9
    elif sitename == "원티드":
        result = wanted.SearchJob(keyword)
    elif sitename == "점핏":
        result = Jumpit.SearchJob(keyword)
    elif sitename == "랠릿":
        result = Rallit.SearchJob(keyword)

if __name__ == "__main__":
<<<<<<< HEAD
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
=======
    sitelist = ["사람인"]
    keys = list(input().split())

    threads = []
    #n개의 사이트와 m개의 키워드가 있으면 n * m개의 크롤링 결과를 가져오는 함수
    for site in sitelist:
        for key in keys:
            t = threading.Thread(target = siteFilter, args = (site, key))
            t.start()
            threads.append(t)
>>>>>>> 5a0a6a6121d71cfdb7e33647efed6b11c9272df9

