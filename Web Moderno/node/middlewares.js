/// middleware patterns
const step1 = (ctx, next) => {
    ctx.val1 = 'mid1'
    next()
}

const step2 = (ctx, next) => {
    ctx.val2 = 'mid2'
    next()
}

const step3 = ctx => ctx.val3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPass = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPass(indice + 1))
    }
    execPass(0)
}

const ctx = {}
exec(ctx, step1,step2,step3)

console.log(ctx)

