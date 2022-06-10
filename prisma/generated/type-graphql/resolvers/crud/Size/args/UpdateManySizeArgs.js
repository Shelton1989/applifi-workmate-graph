"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeUpdateManyMutationInput_1 = require("../../../inputs/SizeUpdateManyMutationInput");
const SizeWhereInput_1 = require("../../../inputs/SizeWhereInput");
let UpdateManySizeArgs = class UpdateManySizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateManyMutationInput_1.SizeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeUpdateManyMutationInput_1.SizeUpdateManyMutationInput)
], UpdateManySizeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], UpdateManySizeArgs.prototype, "where", void 0);
UpdateManySizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySizeArgs);
exports.UpdateManySizeArgs = UpdateManySizeArgs;
