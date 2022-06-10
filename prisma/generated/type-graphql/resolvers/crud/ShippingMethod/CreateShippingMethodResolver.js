"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShippingMethodResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateShippingMethodArgs_1 = require("./args/CreateShippingMethodArgs");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const helpers_1 = require("../../../helpers");
let CreateShippingMethodResolver = class CreateShippingMethodResolver {
    async createShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateShippingMethodArgs_1.CreateShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateShippingMethodResolver.prototype, "createShippingMethod", null);
CreateShippingMethodResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShippingMethod_1.ShippingMethod)
], CreateShippingMethodResolver);
exports.CreateShippingMethodResolver = CreateShippingMethodResolver;
