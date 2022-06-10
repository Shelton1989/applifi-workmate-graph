"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateInput_1 = require("../../../inputs/SizeCreateInput");
let CreateSizeArgs = class CreateSizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateInput_1.SizeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateInput_1.SizeCreateInput)
], CreateSizeArgs.prototype, "data", void 0);
CreateSizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSizeArgs);
exports.CreateSizeArgs = CreateSizeArgs;
