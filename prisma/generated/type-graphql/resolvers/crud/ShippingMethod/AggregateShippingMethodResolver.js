"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShippingMethodResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateShippingMethodArgs_1 = require("./args/AggregateShippingMethodArgs");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const AggregateShippingMethod_1 = require("../../outputs/AggregateShippingMethod");
const helpers_1 = require("../../../helpers");
let AggregateShippingMethodResolver = class AggregateShippingMethodResolver {
    async aggregateShippingMethod(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShippingMethod_1.AggregateShippingMethod, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShippingMethodArgs_1.AggregateShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateShippingMethodResolver.prototype, "aggregateShippingMethod", null);
AggregateShippingMethodResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShippingMethod_1.ShippingMethod)
], AggregateShippingMethodResolver);
exports.AggregateShippingMethodResolver = AggregateShippingMethodResolver;
