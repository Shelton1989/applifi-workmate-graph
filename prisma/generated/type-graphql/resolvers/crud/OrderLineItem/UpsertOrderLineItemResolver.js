"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOrderLineItemArgs_1 = require("./args/UpsertOrderLineItemArgs");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const helpers_1 = require("../../../helpers");
let UpsertOrderLineItemResolver = class UpsertOrderLineItemResolver {
    async upsertOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOrderLineItemArgs_1.UpsertOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOrderLineItemResolver.prototype, "upsertOrderLineItem", null);
UpsertOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], UpsertOrderLineItemResolver);
exports.UpsertOrderLineItemResolver = UpsertOrderLineItemResolver;
