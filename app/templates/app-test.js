import test from "tape"
import <%= camelModuleName %> from "../src/<%= camelModuleName %>"

test("<%= camelModuleName %>", (t) => {
  t.plan(1)
  t.equal(true, <%= camelModuleName %>(), "return true")
})
