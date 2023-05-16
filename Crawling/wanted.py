import Crawl_Function
from selenium.webdriver.common.by import By


def SearchJob(keyword):
    wanted = Crawl_Function.Crawler("https://www.wanted.co.kr/")
    wanted.OpenSite()
    wanted.Search(keyword, "//*[@id=\"__next\"]/div[1]/div/nav/aside/ul/li[1]/button", "//*[@id=\"__next\"]/div[1]/div[2]/div/div[2]/div/form/input")
    wanted.GetJobInfo("#__next > div.Search_SearchContainer__aPKM_ > div > div.Search_Search__PUJPw > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1)", "div")
    wanted.ReturnList("strong", "span.JobCard_companyContent__zUT91 > span.JobCard_companyName__vZMqJ", "", "a")
    return wanted.job_list
