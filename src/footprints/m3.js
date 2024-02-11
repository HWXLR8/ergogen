module.exports = {
    nets: {
	net: undefined
    },
    params: {
	class: 'HOLE',
    },
    body: p =>     `(module MountingHole_3.2mm_M3 (layer F.Cu) (tedit 56D1B4CB)

                    ${p.at /* parametric position */}

		    (attr virtual)
		    (descr "Mounting Hole 3.2mm, no annular, M3")
		    (tags "mounting hole 3.2mm no annular m3")

		    (fp_text user %R (at 0.3 0) (layer F.Fab)
		     (effects (font (size 1 1) (thickness 0.15)))
		    )
		    (fp_circle (center 0 0) (end 3.2 0) (layer Cmts.User) (width 0.15))
		    (fp_circle (center 0 0) (end 3.45 0) (layer F.CrtYd) (width 0.05))
		    (pad 1 np_thru_hole circle (at 0 0) (size 3.2 3.2) (drill 3.2) (layers *.Cu *.Mask))
		   )`
}
