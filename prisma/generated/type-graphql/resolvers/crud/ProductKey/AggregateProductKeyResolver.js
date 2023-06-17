"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductKeyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProductKeyArgs_1 = require("./args/AggregateProductKeyArgs");
const ProductKey_1 = require("../../../models/ProductKey");
const AggregateProductKey_1 = require("../../outputs/AggregateProductKey");
const helpers_1 = require("../../../helpers");
let AggregateProductKeyResolver = class AggregateProductKeyResolver {
    async aggregateProductKey(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProductKey_1.AggregateProductKey, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProductKeyArgs_1.AggregateProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProductKeyResolver.prototype, "aggregateProductKey", null);
AggregateProductKeyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], AggregateProductKeyResolver);
exports.AggregateProductKeyResolver = AggregateProductKeyResolver;
