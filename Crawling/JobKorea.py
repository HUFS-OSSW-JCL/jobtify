from selenium.webdriver.common.by import By
import Crawl_Function
import time
def SearchJob(keyword):
    jobkorea = Crawl_Function.Crawler("https://www.jobkorea.co.kr/")
    jobkorea.OpenSite()
    jobkorea.Search(keyword,"//*[@id=\"header\"]/div[1]/div[1]", "//*[@id=\"stext\"]")
    jobkorea.click("#careerTitle")
    jobkorea.click("#optional > div > div.optional-detail.clear > div.exp.simple > div > div.ly-cnt > div.exp-option.clear > div.expHas.clear > div.exp_new > label > span > span")
    jobkorea.click("#optional > div > div.optional-detail.clear > div.exp.simple > div > div.ly-cnt > div.choose-box > ul > li:nth-child(1) > label")
    jobkorea.click("#optional > div > div.optional-detail.clear > div.exp.simple > div > div.ly-cnt > div.btns > button.btn-apply.pseudo-icn")

    time.sleep(3)
    jobkorea.GetJobInfo( "#content > div > div > div.cnt-list-wrap > div > div.recruit-info > div.lists > div > div.list-default > ul", "li" )
    job_lists = jobkorea.ReturnList("div > div.post-list-info > a", "div > div.post-list-corp > a", "div > div.post-list-info > p.option > span.date", "div > div.post-list-info > a")
    return job_lists

