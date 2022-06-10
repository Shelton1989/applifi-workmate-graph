"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Order_1 = require("../../../models/Order");
const User_1 = require("../../../models/User");
const AddressOrdersArgs_1 = require("./args/AddressOrdersArgs");
const helpers_1 = require("../../../helpers");
let AddressRelationsResolver = class AddressRelationsResolver {
    async User(address, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUnique({
            where: {
                id: address.id,
            },
        }).User({});
    }
    async Orders(address, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUnique({
            where: {
                id: address.id,
            },
        }).Orders(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Address_1.Address, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressRelationsResolver.prototype, "User", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Address_1.Address, Object, AddressOrdersArgs_1.AddressOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressRelationsResolver.prototype, "Orders", null);
AddressRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressRelationsResolver);
exports.AddressRelationsResolver = AddressRelationsResolver;
