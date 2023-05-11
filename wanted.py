from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from fake_useragent import  UserAgent
import time

def SearchJob(keyword):
    job_list = []
    options = Options()
    url = "https://www.wanted.co.kr/"
    userAgent = UserAgent()
    options.add_argument(f"user-agent = {userAgent.random}")
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(5)
    driver.find_element(By.XPATH, "//*[@id=\"__next\"]/div[1]/div/nav/aside/ul/li[1]/button").click()
    time.sleep(2)
    driver.find_element(By.XPATH, "//*[@id=\"__next\"]/div[1]/div[2]/div/div[2]/div/form/input").send_keys(keyword)
    time.sleep(2)
    driver.find_element(By.XPATH, "//*[@id=\"__next\"]/div[1]/div[2]/div/div[2]/div/form/input").send_keys(Keys.RETURN)
    time.sleep(5)
    all_lists = driver.find_element(By.CSS_SELECTOR, "#__next > div.Search_SearchContainer__aPKM_ > div > div.Search_Search__PUJPw > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1)")
    lists = all_lists.find_elements(By.CSS_SELECTOR, "div")
    for job in lists:
        try:
            lists2 = job.find_element(By.CSS_SELECTOR, "a > div.JobCard_content__5mZPT")
            job_title = lists2.find_element(By.CSS_SELECTOR, "strong")
            job_company = lists2.find_element(By.CSS_SELECTOR, "span.JobCard_companyContent__zUT91 > span.JobCard_companyName__vZMqJ")
            job_list.append([job_title.text, job_company.text])
        except Exception as e:
            pass
    return job_list