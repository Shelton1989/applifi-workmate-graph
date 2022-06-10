"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShippingMethodResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstShippingMethodArgs_1 = require("./args/FindFirstShippingMethodArgs");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const helpers_1 = require("../../../helpers");
let FindFirstShippingMethodResolver = class FindFirstShippingMethodResolver {
    async findFirstShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShippingMethodArgs_1.FindFirstShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstShippingMethodResolver.prototype, "findFirstShippingMethod", null);
FindFirstShippingMethodResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShippingMethod_1.ShippingMethod)
], FindFirstShippingMethodResolver);
exports.FindFirstShippingMethodResolver = FindFirstShippingMethodResolver;
