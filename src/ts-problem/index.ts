type Str = 'str1' | 'str2' | 'bacon'
let theString: Str = 'str2'
// Reassign "theString" to another acceptable string

/** assign myObj to a type that will only allow the value of "theString" as a key, e.g. theString is set to "str1" current, myObj should ONLY allow { "str1": somevalue }
 * HINT: Record and typeof
 **/

type Obj = Record<typeof theString,string>
  

const myObj:Obj = {
  'str2': '3',
}
