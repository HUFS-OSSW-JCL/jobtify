import Crawl_Function
import time
from selenium.webdriver.common.by import By

def SearchJob(keyword):
    rallit = Crawl_Function.Crawler("https://www.rallit.com/")
    rallit.OpenSite()
    rallit.driver.implicitly_wait(10)
    rallit.Search(keyword, "//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input","//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input")
    time.sleep(2)
    a = rallit.driver.find_element("#__next > main > div > section.css-1xvi5b5 > ul > article")

    job_lists = rallit.GetJobInfo("#__next > main > div > section.css-1xvi5b5 > ul", "li")
    fil_list = []
    for filter in job_lists:
        
    job_dict = {}
    for job in job_lists:
        print(job.find_element(By.CSS_SELECTOR, " a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(2) > h3").text)

        # try:
        #     # job_name = job.find_element(By.CSS_SELECTOR, "article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(2) > h3")
        #     # job_company = job.find_element(By.CSS_SELECTOR, "article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(1) > p")
        #     # job_link = job.find_element(By.CSS_SELECTOR, "article > a")
        #     # job_dict['공고명'] = job_name.text
        #     # job_dict['회사명'] = job_company.text
        #     # job_dict['링크'] = job_link.get_attribute("href")
        #     print(job.find_element(By.CSS_SELECTOR,"article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(2) > h3").text)
        #     # job_company = job.find_element(By.CSS_SELECTOR, "article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(1) > p")
        #     # job_link = job.find_element(By.CSS_SELECTOR, "article > a")
        # except Exception as e:
        #     pass

    return job_dict
    #return job_dict
    # count = 0
    # for job in job_lists:
    #     print(count)
    #     count += 1


    # for e in b:
    #     print(e.text)

    # __next > main > div > section.css-1xvi5b5 > ul > li:nth-child(3) > article > a > div.css-1gw9rd1 > div:nth-child(1)
