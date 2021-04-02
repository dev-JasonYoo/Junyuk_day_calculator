from  dateutil.relativedelta import *
import datetime
import calendar

ipdae = datetime.date.fromisoformat(input("입대일을 YYYY-MM-DD 형식으로 입력해주세요\n"))
junyuk = ipdae+relativedelta(years=+1,months=+6,days=-1)
total_days = str(junyuk - ipdae).split(',')[0]

print("전역일은 {}입니다.".format(junyuk))
print("총 복무일은 {}일입니다".format(total_days[:-5]))

def timedel2int(timedelta) :
    return int(str(timedelta)[:-14])

def first_day_month(a_day) :
    a_day = a_day.replace(day=1)
    return a_day

def last_day_month(a_day) :
    a_day = a_day.replace(day=calendar.monthrange(a_day.year,a_day.month)[1])
    return a_day

print(last_day_month(ipdae))

last_day1 = last_day_month(ipdae + relativedelta(months=+2))

first_day2 = last_day1 + relativedelta(days=+1)
last_day2 = last_day_month(ipdae + relativedelta(months=+8))

first_day3 = last_day2 + relativedelta(days=+1)
last_day3 = last_day_month(ipdae + relativedelta(months=+14))

first_day4 = last_day3 + relativedelta(days=+1)

first_and_last = (ipdae, last_day1, first_day2, last_day2, first_day3, last_day3, first_day4, junyuk)

days = []
for i in range(8):
    days.append(0)

#days1: Total service days as a private(이병)
days[0] = first_and_last[1] - first_and_last[0]

#days2: Total service days as a private first class(일병)
days[1] = first_and_last[3] - first_and_last[2]

#days3: Total service days as a specialist(상병)
days[2] = first_and_last[5] - first_and_last[4]

#days1: Total service days as a corporal(병장)
days[3] = first_and_last[7] - first_and_last[6]

for i in range(8) :
    print(first_and_last[i])
    
    if (i%2 == 1) :
        print(days[i//2],"\n")