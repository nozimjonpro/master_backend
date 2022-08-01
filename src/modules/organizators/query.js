
const GETORGANIZATORS = `
    select o.* from organizators as o where o.status = 'waiting' and case 
                                                              when $1 > 0 then o.organizator_id  = $1
                                                              else true
                                                            end
`

module.exports = {
    GETORGANIZATORS
}