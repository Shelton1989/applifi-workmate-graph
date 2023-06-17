"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductKeyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueProductKeyArgs_1 = require("./args/FindUniqueProductKeyArgs");
const ProductKey_1 = require("../../../models/ProductKey");
const helpers_1 = require("../../../helpers");
let FindUniqueProductKeyResolver = class FindUniqueProductKeyResolver {
    async productKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ProductKey_1.ProductKey, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProductKeyArgs_1.FindUniqueProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProductKeyResolver.prototype, "productKey", null);
FindUniqueProductKeyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], FindUniqueProductKeyResolver);
exports.FindUniqueProductKeyResolver = FindUniqueProductKeyResolver;
