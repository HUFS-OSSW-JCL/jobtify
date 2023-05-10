from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from fake_useragent import  UserAgent
import time

def SearchJob(keyword):
    options = Options()
    url = "https://www.jumpit.co.kr/"
    userAgent = UserAgent()
    options.add_argument(f"user-agent = {userAgent.random}")
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(url)
    time.sleep(5)
    search = driver.find_element(By.XPATH, "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div/div/input")
    search.click()
    time.sleep(2)
    search.send_keys(keyword)
    time.sleep(2)
    search.send_keys(Keys.RETURN)
    time.sleep(5)
    job_title = driver.find_elements(By.CLASS_NAME, "position_card_info_title")
    for job in job_title:
        print(job.text)
