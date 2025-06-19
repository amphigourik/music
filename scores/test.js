samples('github:tidalcycles/dirt-samples')

$: s("breaks152").slice(12, "0 1 <2 2*2> 3 [4 10] <5 10> 6 7".every(3, rev)).fast(0.6)._scope()

// $: n("<0 -3>, 2 4 5 <[6,8] [7,9]>").fast(1.2)
// .scale("<Eb:minor Ab:minor B:major7>/4")
// .sound("piano")

$:
// n("[7, 9, 11] [0,2,4,6]")
  n("[7, 9, 11] [7,9,11,13]")
.scale("<<Eb:minor Ab:minor> B:major>")
.sound("piano").fast(1.2).room(slider(1.895, 0, 5)).speed("<1 -1>")._pitchwheel()

$: note("eb1 eb2 eb1 eb2 b1 b2 b1 b2 ab1 ab2 ab1 ab2 b1 b2 b1 b2")
  // .ply("<1 2 3 4 5 6 7 8 16>")
  .ply(1)
  .sound("gm_electric_bass_finger")
  .gain(2)
  // .gain("<1 2 3 4 5 6 7 8 16>")
  // .noise("<0 100>")
  .fast(0.3)._punchcard()
$: "<Ebm B7 Abm B7>".layer(
// x => x.voicings('lefthand').struct("[~ x]*2").note(),
x => x.rootNotes(2).note().s('triangle').gain(2).fast(1.2).vib("1:0.2")._scope()//.cutoff(800)
)


  // .lpf(slider(800, 0, 800))
  // .attack(slider(0, 0, 1))
  // .decay(slider(0.465.111.622, 0, 1))
  // .sustain(slider(0.261, 0, 1))
  // .release(slider(0.397, 0, 1))
// .delay(0.5)

// .adsr(".1:.1:.5:.2")