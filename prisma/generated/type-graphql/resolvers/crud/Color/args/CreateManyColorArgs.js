"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateManyInput_1 = require("../../../inputs/ColorCreateManyInput");
let CreateManyColorArgs = class CreateManyColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorCreateManyInput_1.ColorCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyColorArgs.prototype, "data", void 0);
CreateManyColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyColorArgs);
exports.CreateManyColorArgs = CreateManyColorArgs;
