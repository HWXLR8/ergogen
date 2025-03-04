// EC11 rotary encoder
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (for rotary)
//    B: corresponds to pin 2 (for rotary)
//    C: corresponds to pin 3 (for rotary, should be GND)

module.exports = {
    params: {
        designator: 'ROT',
        from: undefined,
        to: undefined,
        A: undefined,
        B: undefined,
        C: undefined
    },
    body: p => `
        (module rotary_encoder (layer F.Cu) (tedit 603326DE)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0.5) (layer F.SilkS)
                ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "" (at 0 8.89) (layer F.Fab)
                (effects (font (size 1 1) (thickness 0.15))))

            ${''/* component outline */}
            (fp_line (start -8.75 -6.86) (end -8.75 6.84) (width 0.05) (layer "F.CrtYd"))
            (fp_line (start -8.75 -6.86) (end 8 -6.86) (width 0.05) (layer "F.CrtYd"))
            (fp_line (start 8 6.84) (end -8.75 6.84) (width 0.05) (layer "F.CrtYd"))
            (fp_line (start 8 6.84) (end 8 -6.86) (width 0.05) (layer "F.CrtYd"))
            (fp_line (start -6 -4.71) (end -5 -5.809999) (width 0.12) (layer "F.Fab"))
            (fp_line (start -6 5.79) (end -6 -4.71) (width 0.12) (layer "F.Fab"))
            (fp_line (start -5 -5.809999) (end 6 -5.81) (width 0.12) (layer "F.Fab"))
            (fp_line (start -3 0) (end 3 0) (width 0.12) (layer "F.Fab"))
            (fp_line (start 0 -3.01) (end 0 2.99) (width 0.12) (layer "F.Fab"))
            (fp_line (start 6 -5.81) (end 6 5.79) (width 0.12) (layer "F.Fab"))
            (fp_line (start 6 5.79) (end -6 5.79) (width 0.12) (layer "F.Fab"))
            (fp_circle (center 0 0) (end 3 0) (width 0.12) (fill none) (layer "F.Fab"))

            ${''/* pin names */}
            (pad "1" thru_hole circle (at 7 -2.51 353) (size 1.5 1.5) (drill 1) (layers "*.Cu" "*.Mask") ${p.from})
            (pad "2" thru_hole circle (at 7 2.49 353) (size 1.5 1.5) (drill 1) (layers "*.Cu" "*.Mask") ${p.to})
            (pad "A" thru_hole rect (at -7.5 -2.51 ${p.r}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") ${p.A})
            (pad "B" thru_hole circle (at -7.5 2.49 353) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") ${p.B})
            (pad "C" thru_hole circle (at -7.5 -0.009999 353) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") ${p.C})

            ${''/* Legs */}
            (pad "" thru_hole rect (at 0 -5.61 ${p.r}) (size 3.2 2) (drill oval 2.8 1.5) (layers "*.Cu" "*.Mask"))
            (pad "" thru_hole rect (at 0 5.59 ${p.r}) (size 3.2 2) (drill oval 2.8 1.5) (layers "*.Cu" "*.Mask"))
        )
    `
}
