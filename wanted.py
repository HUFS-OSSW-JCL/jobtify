from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from fake_useragent import  UserAgent
import time

def SearchJob(keyword):
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
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    job_list = driver.find_elements(By.CLASS_NAME, "JobCard_title__ddkwM")
    time.sleep(5)
    for job in job_list:
        print(job.text)

