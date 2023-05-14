from selenium.webdriver.common.by import By
import Crawl_Function

def SearchJob(keyword):
    jobkorea = Crawl_Function.Crawler("https://www.jobkorea.co.kr/")
    jobkorea.OpenSite()
    jobkorea.Search(keyword,"//*[@id=\"header\"]/div[1]/div[1]", "//*[@id=\"stext\"]")
    jobkorea.GetJobInfo( "#content > div > div > div.cnt-list-wrap > div > div.recruit-info > div.lists > div > div.list-default > ul", "li" )
    job_lists = jobkorea.ReturnList("div > div.post-list-info > a", "div > div.post-list-corp > a")
    return job_lists
    # for job in job_lists:
    #     job_title = job.find_element(By.CSS_SELECTOR, "div > div.post-list-info > a")
    #     job_company = job.find_element(By.CSS_SELECTOR, "div > div.post-list-corp > a")
    #     jobkorea.job_list.append([job_title.text, job_company.text])
    
