"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTenantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateManyInput_1 = require("../../../inputs/TenantCreateManyInput");
let CreateManyTenantArgs = class CreateManyTenantArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantCreateManyInput_1.TenantCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTenantArgs.prototype, "data", void 0);
CreateManyTenantArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTenantArgs);
exports.CreateManyTenantArgs = CreateManyTenantArgs;
