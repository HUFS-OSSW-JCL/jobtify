import Crawl_Function
from selenium.webdriver.common.by import By
import time



def SearchJob(keyword, area_list):
    wanted = Crawl_Function.Crawler("https://www.wanted.co.kr/")
    wanted.OpenSite()
    wanted.Search(keyword, "//*[@id=\"__next\"]/div[1]/div/nav/aside/ul/li[1]/button", "//*[@id=\"__next\"]/div[1]/div[2]/div/div[2]/div/form/input")


    wanted.Click_By_CLASS_NAME("FilterButton_FilterButton__xZxZP.FilterButton_active__BpYRv")

    area_element = wanted.driver.find_element(By.XPATH, "//*[@id=\"MODAL_BODY\"]/div[2]/div[1]/ul")
    area_elements = area_element.find_elements(By.CSS_SELECTOR, "li")
    for area_keyword in area_list:
        for areas in area_elements:
            if areas.text in area_keyword:
                areas.click()
    time.sleep(1)

    wanted.Click_By_CLASS_NAME("CommonFooter_button__sCywr")

    wanted.Scroll()
    job_list = []
    try:
        job_lists = wanted.GetJobInfo("#__next > div.Search_SearchContainer__aPKM_ > div > div.Search_Search__PUJPw > div:nth-child(3) > div.SearchJobListOuter_jobListContainer__1TqHZ > div > div:nth-child(1)", "div")
        job_list = wanted.ReturnList(job_lists, "a > div.JobCard_content__5mZPT > strong", "a > div.JobCard_content__5mZPT > span.JobCard_companyContent__zUT91 > span.JobCard_companyName__vZMqJ"," ", "a")
    except Exception:
        pass
    return job_list
