import string

infile = open('brokefatCulled.txt', 'r')
lines = infile.readlines()
infile.close()

names = []
costs = []
cals = []
admit = []
for line in lines:
    spline = line.split(', ')
    names.append(spline[0])
    cals.append(float(spline[1]))
    costs.append(float(spline[2]))
    admit.append(1)

for a in range(len(names)):
    cost = costs[a]
    cal = cals[a]
    for b in range(len(names)):
        if costs[b] < cost and cals[b] < cal:
            admit[a] = 0
            break

for a in range(len(names)):
    if admit[a] > 0:
        print(names[a], cals[a], costs[a], sep='\t')


