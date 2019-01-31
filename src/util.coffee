export default class Util
    @eqArrays: (a, b) ->
        return false unless a.length == b.length

        for i in [0..(a.length)]
            return false unless a[i] == b[i]

        true