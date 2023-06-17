"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductKeyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertProductKeyArgs_1 = require("./args/UpsertProductKeyArgs");
const ProductKey_1 = require("../../../models/ProductKey");
const helpers_1 = require("../../../helpers");
let UpsertProductKeyResolver = class UpsertProductKeyResolver {
    async upsertProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ProductKey_1.ProductKey, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProductKeyArgs_1.UpsertProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertProductKeyResolver.prototype, "upsertProductKey", null);
UpsertProductKeyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], UpsertProductKeyResolver);
exports.UpsertProductKeyResolver = UpsertProductKeyResolver;
