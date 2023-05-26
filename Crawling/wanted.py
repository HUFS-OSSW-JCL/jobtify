import Crawl_Function
from selenium.webdriver.common.by import By
import time



def SearchJob(keyword):
    wanted = Crawl_Function.Crawler("https://www.wanted.co.kr/")
    wanted.OpenSite()
    wanted.Search(keyword, "//*[@id=\"__next\"]/div[1]/div/nav/aside/ul/li[1]/button", "//*[@id=\"__next\"]/div[1]/div[2]/div/div[2]/div/form/input")
<<<<<<< HEAD
    # for i in range(0, 7):
    #     wanted.scroll_down("body")
    job_list = wanted.GetJobInfo("#__next > div.Search_SearchContainer__aPKM_ > div > div.Search_Search__PUJPw > div:nth-child(3) > div.SearchJobListOuter_jobListContainer__1TqHZ > div > div:nth-child(1)", "div")
    job_dict = wanted.ReturnList(job_list, "a > div.JobCard_content__5mZPT > strong", "a > div.JobCard_content__5mZPT > span.JobCard_companyContent__zUT91 > span.JobCard_companyName__vZMqJ"," ", "a")
    return job_dict
=======
    #원티드는 스크롤을 내려야 채용 정보가 갱신되기 때문에 여러번 내리는 함수
    for i in range(0, 7):
        wanted.scroll_down("body")


    wanted.GetJobInfo("#__next > div.Search_SearchContainer__aPKM_ > div > div.Search_Search__PUJPw > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1)", "div")
    job_list = wanted.ReturnList("a > div.JobCard_content__5mZPT > strong", "a > div.JobCard_content__5mZPT > span.JobCard_companyContent__zUT91 > span.JobCard_companyName__vZMqJ"," ", "a")
    return job_list
>>>>>>> 5a0a6a6121d71cfdb7e33647efed6b11c9272df9
