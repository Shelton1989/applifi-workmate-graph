"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateInventoryArgs_1 = require("./args/CreateInventoryArgs");
const Inventory_1 = require("../../../models/Inventory");
const helpers_1 = require("../../../helpers");
let CreateInventoryResolver = class CreateInventoryResolver {
    async createInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inventory_1.Inventory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateInventoryArgs_1.CreateInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateInventoryResolver.prototype, "createInventory", null);
CreateInventoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], CreateInventoryResolver);
exports.CreateInventoryResolver = CreateInventoryResolver;
