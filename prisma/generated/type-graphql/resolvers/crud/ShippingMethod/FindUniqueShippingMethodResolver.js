"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShippingMethodResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueShippingMethodArgs_1 = require("./args/FindUniqueShippingMethodArgs");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const helpers_1 = require("../../../helpers");
let FindUniqueShippingMethodResolver = class FindUniqueShippingMethodResolver {
    async shippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShippingMethodArgs_1.FindUniqueShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueShippingMethodResolver.prototype, "shippingMethod", null);
FindUniqueShippingMethodResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShippingMethod_1.ShippingMethod)
], FindUniqueShippingMethodResolver);
exports.FindUniqueShippingMethodResolver = FindUniqueShippingMethodResolver;
