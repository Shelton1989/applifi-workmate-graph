"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSizeArgs_1 = require("./args/FindFirstSizeArgs");
const Size_1 = require("../../../models/Size");
const helpers_1 = require("../../../helpers");
let FindFirstSizeResolver = class FindFirstSizeResolver {
    async findFirstSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Size_1.Size, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSizeArgs_1.FindFirstSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSizeResolver.prototype, "findFirstSize", null);
FindFirstSizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], FindFirstSizeResolver);
exports.FindFirstSizeResolver = FindFirstSizeResolver;
