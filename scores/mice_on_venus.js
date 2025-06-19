

$: note(`<
e5@2 g5 d6
[e6, e5]@1.5 d6@0.5 [c6, e6, g6]@2
[f5, a5, c6]@1.5 a5@0.5 [g5, c6, e6]@1.5 d6@0.5
[e5, a5, c6]@2 [f5, c6]@2
[e5, g5, c6] a5 [f5, a5, c6]@2
[f5, a5, c6] e6 [f5, a5, c6] a5
[b4, d5, g5]@2 [g5, b5]@2

[e5, a5, c6]@2 [f5, c6]@2
[e5, g5, c6] a5 [f5, a5, c6]@2
a5 c6 b5 g5
f5@2 [f4, a4]@2
g5 e5 c5 [d5@3 c5]
[g4, e5] [f5 g5] e5@2
d5@1.75 [c5 d5]@0.25 e5@2
g5 f5 d5 e5

[g5, c6, e6]@1.5 d6@0.5 [e5, g5, c6]@2
[d5, f5, a5]@1.5 a5@0.5 [g5, c6, e6]@1.5 d6@0.5
[e5, g5, c6]@2 [d5, f5, c6]@2
[d5, f5, c6] a5 [f5, a5, c6]@2
a5 c6 e6 g6
[g5, c6, e6]@2 [e4, g4, c5]@2
,

e3@2 g#3@2
c3@2 [c2, c3]@2
d4@2 c3@2
a2@2 ab2@2
g2@2 f2@2
f2@2 f2@2
[g2, g3]@4

a2@2 ab2@2
g2@2 f2@2
d2@2 g2@2
d3@2 f2@2
[c2, g2, e3]@2 f2@2
a1@2 [f2, c3, a3]@2
[f2, c3, g3]@2 a2@2
c3@2 g2 e3 

c4@2 c3@2
f4@2 [c2, c3]@2
[a2, a3]@2 [ab2, ab3]@2
[g2, g3]@2 [f2, f3]@2
[d2, d3]@2 [g#2, g#3]@2
[c2, c3]@2 c1@2
>`).sound("gm_piano").fast(2).room(0.3)
._punchcard()
.pan(sine.segment(16).range(0.3,0.7).slow(4))
.color("<cyan <magenta yellow>>")

