from selenium import webdriver
import Crawl_Function
from selenium.webdriver.common.by import By


def SearchJob(keyword):
    saramin = Crawl_Function.Crawler("https://www.saramin.co.kr/zf_user/")
    saramin.OpenSite()
    saramin.Search(keyword,"//*[@id=\"sri_header\"]/div[1]/div[1]", "//*[@id=\"ipt_keyword_recruit\"]")
    saramin.driver.find_element(By.XPATH, "//*[@id=\"content\"]/ul[1]/li[2]/a").click()
    job_lists = saramin.GetJobInfo("#recruit_info_list > div.content", "div")
    # job_list = []
    # options = Options()
    # url = "https://www.saramin.co.kr/zf_user/"
    # userAgent = UserAgent()
    # options.add_argument(f"user-agent = {userAgent.random}")
    # driver = webdriver.Chrome()
    # driver.get(url)
    # time.sleep(5)
    # driver.find_element(By.XPATH, "//*[@id=\"btn_search\"]").click()
    # time.sleep(2)
    # driver.find_element(By.XPATH, "//*[@id=\"ipt_keyword_recruit\"]").send_keys(keyword)
    # time.sleep(2)
    # driver.find_element(By.XPATH, "//*[@id=\"btn_search_recruit\"]").click()
    # time.sleep(5)
    # driver.find_element(By.XPATH, "//*[@id=\"content\"]/ul[1]/li[2]/a").click()
    # time.sleep(5)
    # all_contents = driver.find_element(By.CSS_SELECTOR, "#recruit_info_list > div.content")
    # job_info = all_contents.find_elements(By.CSS_SELECTOR, "div")
    for job in job_lists:
        job_title = job.find_element(By.CSS_SELECTOR, "div.area_job > h2")
        job_company = job.find_element(By.CSS_SELECTOR, "div.area_corp > strong")
        saramin.job_list.append([job_title.text, job_company.text])

    return saramin.job_list
