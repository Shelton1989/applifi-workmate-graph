"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSizeArgs_1 = require("./args/FindUniqueSizeArgs");
const Size_1 = require("../../../models/Size");
const helpers_1 = require("../../../helpers");
let FindUniqueSizeResolver = class FindUniqueSizeResolver {
    async size(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSizeArgs_1.FindUniqueSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSizeResolver.prototype, "size", null);
FindUniqueSizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], FindUniqueSizeResolver);
exports.FindUniqueSizeResolver = FindUniqueSizeResolver;
