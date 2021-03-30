from  dateutil.relativedelta import *
import datetime

ipdae = datetime.date.fromisoformat(input("입대일을 YYYY-MM-DD 형식으로 입력해주세요\n"))
junyuk = ipdae+relativedelta(years=+1,months=+6,days=-1)
total_days = str(junyuk - ipdae).split(',')[0]

print ("전역일은 {}입니다.".format(junyuk))
print("총 복무일은 {}일입니다".format(total_days[:-5]))