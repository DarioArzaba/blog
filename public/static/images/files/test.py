textDataCards = [
	"MUCH CURRENT RESEARCH IN ARTIFICIAL INTELLIGENCE INVOLVES ",
	"DESIGNING PROGRAMS THAT CAPTURE THE KNOWLEDGE AND REASONING "
	"PROCESSES OF HIGHLY INTELLIGENT SPECIALISTS. THE PRACTICAL GOAL OF ",
	"SUCH WORK IS TO MAKE SPECIALIZED EXPERTISE MORE GENERALLY ",
	"ACCESSIBLE.",
	"",
	"MUCH CURRENT RESEARCH IN ARTIFICIAL INTELLIGENCE INVOLVES DESIGNING PROGRAMS THA",
]

wordsFromText = []
endExecution = False
for textCard in textDataCards:
	if not textCard:
		endExecution = True
	elif endExecution == False:
		wordsList = textCard.split()
		for word in wordsList:
			wordsFromText.append(word)

wordsFromText.reverse()
wordsFromTextRev = wordsFromText
previousLineCounter = 0
currentLineCounter = 0
lineCounter = ''
linesReversed = []

for word in wordsFromTextRev:
	if wordsFromTextRev.index(word) == 0:
		lineCounter = lineCounter + word + ' '
		previousLineCounter = len(lineCounter)
		linesReversed.append(lineCounter)
		lineCounter = ''
	elif currentLineCounter > previousLineCounter:
		previousLineCounter = currentLineCounter
		linesReversed.append(lineCounter)
		lineCounter = ''
		lineCounter = lineCounter + word + ' '
		currentLineCounter = len(lineCounter)
	else:
		lineCounter = lineCounter + word + ' '
		currentLineCounter = len(lineCounter)
if currentLineCounter > previousLineCounter:
	linesReversed.append(lineCounter)
else:
	linesReversed[-1] += lineCounter

linesReversed.reverse()
lines = linesReversed
lineR = ''
linesResult = []

for line in lines:
	wordsLine = line.split()
	wordsLine.reverse()
	for word in wordsLine:
		lineR = lineR + word + ' '
	linesResult.append(lineR)
	lineR = ''

for lineR in linesResult:
	print(lineR)
	
print('End')
