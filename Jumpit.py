import Crawl_Function
from selenium.webdriver.common.by import By

def SearchJob(keyword):
    jumpit = Crawl_Function.Crawler("https://www.jumpit.co.kr/")
    jumpit.OpenSite()
    jumpit.Search(keyword, "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div[1]/div", "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div/div/input")
    job_lists = jumpit.GetJobInfo("#root > main > div > section.sc-fydGpi.hIHIfr", "section > div" )
    for job in job_lists:
        try:
            #job_title = job.find_element(By.TAG_NAME, "h2")
            job_title = job.find_element(By.CSS_SELECTOR, "a > div.sc-gUQvok.iPhfkg > h2")
            job_company = job.find_element(By.CSS_SELECTOR, "a > div.sc-gUQvok.iPhfkg > div > span")
            jumpit.job_list.append([job_title.text, job_company.text])
        except Exception as e:
            pass
    return jumpit.job_list